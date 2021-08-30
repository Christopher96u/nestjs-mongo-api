import {IsAlpha, IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateIf, Length} from "class-validator";

export class UpdateCategoryDto {
    @IsString() @IsAlpha() @Length(3 , 30) @IsNotEmpty()
    readonly name : string;

    @ValidateIf((obj)=> String(obj.description).length > 0)  @IsString() @Length(5,50)  @IsOptional()
    readonly description ?: string;

    @IsBoolean() @IsOptional()
    readonly isActive?: boolean

}