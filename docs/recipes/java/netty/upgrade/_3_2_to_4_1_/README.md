---
description: Netty 3.2 to 4.1 OpenRewrite recipes.
---

# Netty 3.2 to 4.1

_Recipes to migrate from [Netty](https://netty.io/) 3.2.x to 4.1.x._

## Recipes

* [Change `MessageEvent` parameter of `channelRead` to `Object`](./changemessageeventparametertoobject.md)
* [Migrate Channel.setReadable(boolean) to Channel.config().setAutoRead(boolean)](./channelsetreadabletoautoread.md)
* [Migrate StringEncoder(String) to StringEncoder(StandardCharsets)](./stringencodertostandardcharsets.md)
* [Remove ChannelStateEvent parameter from handler methods](./removechannelstateeventparameter.md)
* [Replace Channels.fireMessageReceived(..) with ctx.fireChannelRead(e)](./replacechannelsfiremessagereceived.md)


