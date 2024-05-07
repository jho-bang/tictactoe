import { createRouter } from "@rune-ts/server";
import { TicTacToeRoute } from "../../pages/home/route";

export type ClientRouter = typeof TicTacToeRoute;

export const ClientRouter = createRouter<ClientRouter>({
  ...TicTacToeRoute,
});
