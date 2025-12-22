---
description: SLF4J OpenRewrite recipes.
---

# SLF4J

_Recipes related to [Simple Logging Facade for Java (`SLF4J`)](http://www.slf4j.org/)._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add JBoss LogManager's SLF4J provider](./addjbosslogmanagerslf4jproviderdependency.md)
* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](./commonslogging1toslf4j1.md)
* [Migrate JBoss Logging to SLF4J](./jbossloggingtoslf4j.md)
* [Migrate JUL to SLF4J](./jultoslf4j.md)
* [Migrate Log4j 1.x to SLF4J 1.x](./log4j1toslf4j1.md)
* [Migrate Log4j 2.x to SLF4J 1.x](./log4j2toslf4j1.md)
* [Migrate Log4j to SLF4J](./log4jtoslf4j.md)
* [Parameterize SLF4J's logging statements](./parameterizedlogging.md)
* [Replace JUL Logger creation with SLF4J LoggerFactory](./julgetloggertologgerfactoryrecipes.md)
* [Replace JUL active Level check with corresponding SLF4J method calls](./julisloggabletoisenabledrecipes.md)
* [Replace JUL active Level check with corresponding SLF4J method calls](./jultoslf4jlambdasupplierrecipes.md)
* [Replace JUL `log(Level, String, Throwable)` with corresponding SLF4J method calls](./jultoslf4jsimplecallswiththrowablerecipes.md)
* [Replace JUL `log(Level, Throwable, Supplier&lt;String&gt;)` with corresponding SLF4J method calls](./jultoslf4jlambdasupplierwiththrowablerecipes.md)
* [SLF4J best practices](./slf4jbestpractices.md)

## Recipes

* [Change SLF4J log level](./changeloglevel.md)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](./completeexceptionlogging.md)
* [Loggers should be named for their enclosing classes](./loggersnamedforenclosingclass.md)
* [Match `if (is*Enabled())` with logging statements](./matchisloglevelenabledwithlogstatements.md)
* [Optimize log statements](./wrapexpensivelogstatementsinconditionals.md)
* [Replace JUL `Level.ALL` logging with SLF4J's trace level](./jullevelalltotracerecipe.md)
* [Replace JUL `Logger.config(Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierconfigrecipe.md)
* [Replace JUL `Logger.fine(Supplier&lt;String&gt;)` with SLF4J's `Logger.atDebug().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerecipe.md)
* [Replace JUL `Logger.finer(Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerrecipe.md)
* [Replace JUL `Logger.finest(Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinestrecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getCanonicalName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclasscanonicalnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.getLogger(Some.class.getName())` with SLF4J's `LoggerFactory.getLogger(Some.class)`](./julgetloggertologgerfactoryrecipes$getloggerclassnametologgerfactoryrecipe.md)
* [Replace JUL `Logger.info(Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.ALL)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelallrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.CONFIG)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelconfigrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINE)` with SLF4J's `Logger.isDebugEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINER)` with SLF4J's `Logger.isTraceEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinerrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINEST)` with SLF4J's `Logger.isTraceEnabled`](./julisloggabletoisenabledrecipes$loggerisloggablelevelfinestrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.INFO)` with SLF4J's `Logger.isInfoEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.SEVERE)` with SLF4J's `Logger.isErrorEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelsevererecipe.md)
* [Replace JUL `Logger.isLoggable(Level.WARNING)` with SLF4J's `Logger.isWarnEnabled()`](./julisloggabletoisenabledrecipes$loggerisloggablelevelwarningrecipe.md)
* [Replace JUL `Logger.log(Level.ALL, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogallrecipe.md)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogconfigrecipe.md)
* [Replace JUL `Logger.log(Level.FINE, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerecipe.md)
* [Replace JUL `Logger.log(Level.FINER, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerrecipe.md)
* [Replace JUL `Logger.log(Level.FINEST, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinestrecipe.md)
* [Replace JUL `Logger.log(Level.INFO, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierloginforecipe.md)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogsevererecipe.md)
* [Replace JUL `Logger.log(Level.WARNING, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogwarningrecipe.md)
* [Replace JUL `Logger.severe(Supplier&lt;String&gt;)` with SLF4J's `Logger.atError().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsuppliersevererecipe.md)
* [Replace JUL `Logger.warning(Supplier&lt;String&gt;)` with SLF4J's `Logger.atWarn().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierwarningrecipe.md)
* [Replace JUL `logger.log(Level.ALL, String message, Throwable e)` with SLF4J's `Logger.trace(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierallrecipe.md)
* [Replace JUL `logger.log(Level.ALL, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierallrecipe.md)
* [Replace JUL `logger.log(Level.CONFIG, String message, Throwable e)` with SLF4J's `Logger.info(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierconfigrecipe.md)
* [Replace JUL `logger.log(Level.CONFIG, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierconfigrecipe.md)
* [Replace JUL `logger.log(Level.FINE, String message, Throwable e)` with SLF4J's `Logger.debug(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierfinerecipe.md)
* [Replace JUL `logger.log(Level.FINE, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atDebug().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierfinerecipe.md)
* [Replace JUL `logger.log(Level.FINER, String message, Throwable e)` with SLF4J's `Logger.trace(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierfinerrecipe.md)
* [Replace JUL `logger.log(Level.FINER, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierfinerrecipe.md)
* [Replace JUL `logger.log(Level.FINEST, String message, Throwable e)` with SLF4J's `Logger.trace(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierfinestrecipe.md)
* [Replace JUL `logger.log(Level.FINEST, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierfinestrecipe.md)
* [Replace JUL `logger.log(Level.INFO, String message, Throwable e)` with SLF4J's `Logger.info(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierinforecipe.md)
* [Replace JUL `logger.log(Level.INFO, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierinforecipe.md)
* [Replace JUL `logger.log(Level.SEVERE, String message, Throwable e)` with SLF4J's `Logger.error(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsuppliersevererecipe.md)
* [Replace JUL `logger.log(Level.SEVERE, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atError().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsuppliersevererecipe.md)
* [Replace JUL `logger.log(Level.WARNING, String message, Throwable e)` with SLF4J's `Logger.warn(message, e)`](./jultoslf4jsimplecallswiththrowablerecipes$jultoslf4jsupplierwarningrecipe.md)
* [Replace JUL `logger.log(Level.WARNING, e, Supplier&lt;String&gt;)` with SLF4J's `Logger.atWarn().log(Supplier&lt;String&gt;)`](./jultoslf4jlambdasupplierwiththrowablerecipes$jultoslf4jsupplierwarningrecipe.md)
* [Replace parameterized JUL level call with corresponding SLF4J method calls](./julparameterizedarguments.md)
* [SLF4J logging statements should begin with constants](./slf4jlogshouldbeconstant.md)
* [Strip `toString()` from arguments](./striptostringfromarguments.md)


