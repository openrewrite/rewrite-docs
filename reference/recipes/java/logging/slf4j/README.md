# SLF4J

_Recipes related to [Simple Logging Facade for Java (`SLF4J`)](http://www.slf4j.org/)._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](./commonslogging1toslf4j1.md)
* [Migrate JUL to SLF4J](./jultoslf4j.md)
* [Migrate Log4j 1.x to SLF4J 1.x](./log4j1toslf4j1.md)
* [Migrate Log4j 2.x to SLF4J 1.x](./log4j2toslf4j1.md)
* [Migrate Log4j to SLF4J](./log4jtoslf4j.md)
* [Parameterize SLF4J's logging statements](./parameterizedlogging.md)
* [Replace JUL Logger creation with SLF4J LoggerFactory](./julgetloggertologgerfactoryrecipes.md)
* [Replace JUL active Level check with corresponding SLF4J method calls](./julisloggabletoisenabledrecipes.md)
* [SLF4J best practices](./slf4jbestpractices.md)

## Recipes

* [Change SLF4J log level](./changeloglevel.md)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](./completeexceptionlogging.md)
* [Loggers should be named for their enclosing classes](./loggersnamedforenclosingclass.md)
* [Replace JUL `Level.ALL` logging with SLF4J's trace level](./jullevelalltotracerecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getCanonicalName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclasscanonicalnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclassnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.ALL)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelallrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.CONFIG)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelconfigrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINE)` with SLF4J's `Logger.isDebugEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINER)` with SLF4J's `Logger.isTraceEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINEST)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinestrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.INFO)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.SEVERE)` with SLF4J's `Logger.isErrorEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelsevererecipe.md)
* [Replace JUL `Logger.isLoggable(Level.WARNING)` with SLF4J's `Logger.isWarnEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelwarningrecipe.md)
* [SLF4J logging statements should begin with constants](./slf4jlogshouldbeconstant.md)


