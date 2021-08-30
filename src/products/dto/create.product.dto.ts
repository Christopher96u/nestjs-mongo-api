import { IsNotEmpty, IsString, Length, ValidateIf, IsOptional, IsMongoId } from "class-validator";

export class CreateProductDto {

    @IsString() @IsNotEmpty() @Length(3,30)
    readonly name: string;
    
    @ValidateIf((obj)=> String(obj.description).length > 0)  @IsString() @Length(5,50)  @IsOptional()
    readonly description?: string;
    
    @IsMongoId() @IsNotEmpty() @IsString()
    readonly category: string;
}