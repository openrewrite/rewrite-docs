# java.net APIs

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [`URLConstructorsToURI` Refaster recipes](./urlconstructorstourirecipes.md)
* [Use modernized `java.net` APIs](./javanetapis.md)

## Recipes

* [Convert `new URL(String)` to `URI.create(String).toURL()`](./urlconstructorstourirecipesurlsingleargumentconstructorrecipe.md)
* [Convert `new URL(String, String, String)` to `new URI(...).toURL()`](./urlconstructorstourirecipesurlthreeargumentconstructorrecipe.md)
* [Convert `new URL(String, String, int, String)` to `new URI(...).toURL()`](./urlconstructorstourirecipesurlfourargumentconstructorrecipe.md)
* [Use `java.net.HttpURLConnection.HTTP_INTERNAL_ERROR`](./migratehttpurlconnectionhttpservererrortohttpinternalerror.md)
* [Use `java.net.MulticastSocket#getTimeToLive()`](./migratemulticastsocketgetttltogettimetolive.md)
* [Use `java.net.MulticastSocket#setTimeToLive(int)`](./migratemulticastsocketsetttltosettimetolive.md)
* [Use `java.net.URLDecoder#decode(String, StandardCharsets.UTF_8)`](./migrateurldecoderdecode.md)
* [Use `java.net.URLEncoder#encode(String, StandardCharsets.UTF_8)`](./migrateurlencoderencode.md)


