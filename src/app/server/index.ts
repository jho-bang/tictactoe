import { type LayoutData, MetaView, app } from "@rune-ts/server";
import { ClientRouter } from "../routes";

const server = app();

server.get(ClientRouter[""].toString(), (req, res) => {
  const layoutData: LayoutData = {
    head: {
      title: "튜토리얼-틱택토",
      description: "",
    },
  };

  const html = new MetaView(ClientRouter[""]({}), layoutData).toHtml();
  return res.send(html);
});
