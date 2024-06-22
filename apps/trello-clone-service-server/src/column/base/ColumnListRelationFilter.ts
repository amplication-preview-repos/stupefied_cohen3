/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColumnWhereInput } from "./ColumnWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ColumnListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => ColumnWhereInput)
  @IsOptional()
  @Field(() => ColumnWhereInput, {
    nullable: true,
  })
  every?: ColumnWhereInput;

  @ApiProperty({
    required: false,
    type: () => ColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => ColumnWhereInput)
  @IsOptional()
  @Field(() => ColumnWhereInput, {
    nullable: true,
  })
  some?: ColumnWhereInput;

  @ApiProperty({
    required: false,
    type: () => ColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => ColumnWhereInput)
  @IsOptional()
  @Field(() => ColumnWhereInput, {
    nullable: true,
  })
  none?: ColumnWhereInput;
}
export { ColumnListRelationFilter as ColumnListRelationFilter };
