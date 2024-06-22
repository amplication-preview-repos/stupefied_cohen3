/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CardService } from "../card.service";
import { CardCreateInput } from "./CardCreateInput";
import { Card } from "./Card";
import { CardFindManyArgs } from "./CardFindManyArgs";
import { CardWhereUniqueInput } from "./CardWhereUniqueInput";
import { CardUpdateInput } from "./CardUpdateInput";

export class CardControllerBase {
  constructor(protected readonly service: CardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Card })
  async createCard(@common.Body() data: CardCreateInput): Promise<Card> {
    return await this.service.createCard({
      data: {
        ...data,

        board: data.board
          ? {
              connect: data.board,
            }
          : undefined,

        column: data.column
          ? {
              connect: data.column,
            }
          : undefined,
      },
      select: {
        board: {
          select: {
            id: true,
          },
        },

        column: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Card] })
  @ApiNestedQuery(CardFindManyArgs)
  async cards(@common.Req() request: Request): Promise<Card[]> {
    const args = plainToClass(CardFindManyArgs, request.query);
    return this.service.cards({
      ...args,
      select: {
        board: {
          select: {
            id: true,
          },
        },

        column: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Card })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async card(
    @common.Param() params: CardWhereUniqueInput
  ): Promise<Card | null> {
    const result = await this.service.card({
      where: params,
      select: {
        board: {
          select: {
            id: true,
          },
        },

        column: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Card })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCard(
    @common.Param() params: CardWhereUniqueInput,
    @common.Body() data: CardUpdateInput
  ): Promise<Card | null> {
    try {
      return await this.service.updateCard({
        where: params,
        data: {
          ...data,

          board: data.board
            ? {
                connect: data.board,
              }
            : undefined,

          column: data.column
            ? {
                connect: data.column,
              }
            : undefined,
        },
        select: {
          board: {
            select: {
              id: true,
            },
          },

          column: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Card })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCard(
    @common.Param() params: CardWhereUniqueInput
  ): Promise<Card | null> {
    try {
      return await this.service.deleteCard({
        where: params,
        select: {
          board: {
            select: {
              id: true,
            },
          },

          column: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}