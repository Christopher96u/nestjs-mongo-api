import {IsAlpha, IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

export class UpdateCategoryDto {
    @IsString()
    @IsAlpha()
    @Length(3 , 30)
    @IsNotEmpty()
    readonly name : string;

    @IsString()
    @Length(5 , 50)
    @IsOptional()
    readonly description : string;

}