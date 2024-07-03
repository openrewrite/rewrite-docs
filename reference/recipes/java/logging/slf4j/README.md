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
* [Replace JUL active Level check with corresponding SLF4J method calls](./jultoslf4jlambdasupplierrecipes.md)
* [SLF4J best practices](./slf4jbestpractices.md)

## Recipes

* [Change SLF4J log level](./changeloglevel.md)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](./completeexceptionlogging.md)
* [Loggers should be named for their enclosing classes](./loggersnamedforenclosingclass.md)
* [Replace JUL `Level.ALL` logging with SLF4J's trace level](./jullevelalltotracerecipe.md)
* [Replace JUL `Logger.config(Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierconfigrecipe.md)
* [Replace JUL `Logger.fine(Supplier<String>)` with SLF4J's `Logger.atDebug().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerecipe.md)
* [Replace JUL `Logger.finer(Supplier<String>)` with SLF4J's `Logger.atTrace().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerrecipe.md)
* [Replace JUL `Logger.finest(Supplier<String>)` with SLF4J's `Logger.atTrace().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinestrecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getCanonicalName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclasscanonicalnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclassnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.info(Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.ALL)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelallrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.CONFIG)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelconfigrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINE)` with SLF4J's `Logger.isDebugEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINER)` with SLF4J's `Logger.isTraceEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINEST)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinestrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.INFO)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.SEVERE)` with SLF4J's `Logger.isErrorEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelsevererecipe.md)
* [Replace JUL `Logger.isLoggable(Level.WARNING)` with SLF4J's `Logger.isWarnEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelwarningrecipe.md)
* [Replace JUL `Logger.log(Level.ALL, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogallrecipe.md)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogconfigrecipe.md)
* [Replace JUL `Logger.log(Level.FINE, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerecipe.md)
* [Replace JUL `Logger.log(Level.FINER, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerrecipe.md)
* [Replace JUL `Logger.log(Level.FINEST, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinestrecipe.md)
* [Replace JUL `Logger.log(Level.INFO, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierloginforecipe.md)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogsevererecipe.md)
* [Replace JUL `Logger.log(Level.WARNING, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogwarningrecipe.md)
* [Replace JUL `Logger.severe(Supplier<String>)` with SLF4J's `Logger.atError().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsuppliersevererecipe.md)
* [Replace JUL `Logger.warning(Supplier<String>)` with SLF4J's `Logger.atWarn().log(Supplier<String>)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierwarningrecipe.md)
* [Replace parameterized JUL leval call with corresponding slf4j method calls](./julparameterizedarguments.md)
* [SLF4J logging statements should begin with constants](./slf4jlogshouldbeconstant.md)


