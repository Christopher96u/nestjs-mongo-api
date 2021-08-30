import {IsAlpha, IsNotEmpty, IsOptional, IsString, Length, ValidateIf} from "class-validator";

export class CreateCategoryDto {
    
    @IsString() @IsAlpha() @Length(3 , 30) @IsNotEmpty()
    readonly name : string;

    @ValidateIf((obj)=> String(obj.description).length > 0)  @IsString() @Length(5,50)  @IsOptional()
    readonly description ?: string;
}