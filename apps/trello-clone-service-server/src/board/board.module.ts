import { Module } from "@nestjs/common";
import { BoardModuleBase } from "./base/board.module.base";
import { BoardService } from "./board.service";
import { BoardController } from "./board.controller";
import { BoardResolver } from "./board.resolver";

@Module({
  imports: [BoardModuleBase],
  controllers: [BoardController],
  providers: [BoardService, BoardResolver],
  exports: [BoardService],
})
export class BoardModule {}
