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
import { BoardService } from "../board.service";
import { BoardCreateInput } from "./BoardCreateInput";
import { Board } from "./Board";
import { BoardFindManyArgs } from "./BoardFindManyArgs";
import { BoardWhereUniqueInput } from "./BoardWhereUniqueInput";
import { BoardUpdateInput } from "./BoardUpdateInput";
import { CardFindManyArgs } from "../../card/base/CardFindManyArgs";
import { Card } from "../../card/base/Card";
import { CardWhereUniqueInput } from "../../card/base/CardWhereUniqueInput";
import { ColumnFindManyArgs } from "../../column/base/ColumnFindManyArgs";
import { Column } from "../../column/base/Column";
import { ColumnWhereUniqueInput } from "../../column/base/ColumnWhereUniqueInput";

export class BoardControllerBase {
  constructor(protected readonly service: BoardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Board })
  async createBoard(@common.Body() data: BoardCreateInput): Promise<Board> {
    return await this.service.createBoard({
      data: data,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Board] })
  @ApiNestedQuery(BoardFindManyArgs)
  async boards(@common.Req() request: Request): Promise<Board[]> {
    const args = plainToClass(BoardFindManyArgs, request.query);
    return this.service.boards({
      ...args,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async board(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    const result = await this.service.board({
      where: params,
      select: {
        createdAt: true,
        createdBy: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBoard(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() data: BoardUpdateInput
  ): Promise<Board | null> {
    try {
      return await this.service.updateBoard({
        where: params,
        data: data,
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Board })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBoard(
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Board | null> {
    try {
      return await this.service.deleteBoard({
        where: params,
        select: {
          createdAt: true,
          createdBy: true,
          id: true,
          name: true,
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

  @common.Get("/:id/cards")
  @ApiNestedQuery(CardFindManyArgs)
  async findCards(
    @common.Req() request: Request,
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Card[]> {
    const query = plainToClass(CardFindManyArgs, request.query);
    const results = await this.service.findCards(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cards")
  async connectCards(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        connect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cards")
  async updateCards(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        set: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cards")
  async disconnectCards(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        disconnect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/columns")
  @ApiNestedQuery(ColumnFindManyArgs)
  async findColumns(
    @common.Req() request: Request,
    @common.Param() params: BoardWhereUniqueInput
  ): Promise<Column[]> {
    const query = plainToClass(ColumnFindManyArgs, request.query);
    const results = await this.service.findColumns(params.id, {
      ...query,
      select: {
        board: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/columns")
  async connectColumns(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: ColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      columns: {
        connect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/columns")
  async updateColumns(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: ColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      columns: {
        set: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/columns")
  async disconnectColumns(
    @common.Param() params: BoardWhereUniqueInput,
    @common.Body() body: ColumnWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      columns: {
        disconnect: body,
      },
    };
    await this.service.updateBoard({
      where: params,
      data,
      select: { id: true },
    });
  }
}
