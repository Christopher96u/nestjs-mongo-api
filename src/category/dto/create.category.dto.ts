import {IsAlpha, IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";

// no usar Number o String, siempre en minuscula number, string, solo usar Date
export class CreateCategoryDto {
    @IsString()
    @IsAlpha()
    @Length(3 , 30)
    @IsNotEmpty()
    readonly name : string;

    @IsString()
    @Length(5 , 50)
    @IsOptional()
    readonly description : string;

    @IsDate()
    @IsOptional()
    readonly updatedAt: Date;

    @IsDate()
    @IsOptional()
    readonly deletedAt: Date;

    @IsBoolean()
    @IsOptional()
    readonly isDeleted: boolean;
}