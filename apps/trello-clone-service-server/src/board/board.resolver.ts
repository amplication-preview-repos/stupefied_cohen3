import * as graphql from "@nestjs/graphql";
import { BoardResolverBase } from "./base/board.resolver.base";
import { Board } from "./base/Board";
import { BoardService } from "./board.service";

@graphql.Resolver(() => Board)
export class BoardResolver extends BoardResolverBase {
  constructor(protected readonly service: BoardService) {
    super(service);
  }
}
