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
import { BoardWhereUniqueInput } from "../../board/base/BoardWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ColumnWhereUniqueInput } from "../../column/base/ColumnWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CardWhereInput {
  @ApiProperty({
    required: false,
    type: () => BoardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BoardWhereUniqueInput)
  @IsOptional()
  @Field(() => BoardWhereUniqueInput, {
    nullable: true,
  })
  board?: BoardWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ColumnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ColumnWhereUniqueInput)
  @IsOptional()
  @Field(() => ColumnWhereUniqueInput, {
    nullable: true,
  })
  column?: ColumnWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}

export { CardWhereInput as CardWhereInput };