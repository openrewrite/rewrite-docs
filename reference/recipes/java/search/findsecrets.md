# Find plain text secrets

**org.openrewrite.java.search.FindSecrets**  
_Find secrets stored in plain text in code._

### Tags

* security

## Recipe list

* [Find text](../../java/search/findtext.md)
  * patterns: [(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}), -----BEGIN RSA PRIVATE KEY-----, -----BEGIN DSA PRIVATE KEY-----, -----BEGIN EC PRIVATE KEY-----, -----BEGIN PGP PRIVATE KEY BLOCK-----, ((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}), amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}, AKIA[0-9A-Z]{16}, da2-[a-z0-9]{26}, EAACEdEose0cBA[0-9A-Za-z]+, [fF][aA][cC][eE][bB][oO][oO][kK].*['|"][0-9a-f]{32}['|"], [gG][iI][tT][hH][uU][bB].*['|"][0-9a-zA-Z]{35,40}['|"], [aA][pP][iI]_?[kK][eE][yY].*['|"][0-9a-zA-Z]{32,45}['|"], [sS][eE][cC][rR][eE][tT].*['|"][0-9a-zA-Z]{32,45}['|"], AIza[0-9A-Za-z\-_]{35}, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, "type": "service_account", AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, ya29\.[0-9A-Za-z\-_]+, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, [hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}, [0-9a-f]{32}-us[0-9]{1,2}, key-[0-9a-zA-Z]{32}, [a-zA-Z]{3,10}://[^/\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["'\s], access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}, sk_live_[0-9a-z]{32}, https://hooks\.slack\.com/services/T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}, sk_live_[0-9a-zA-Z]{24}, rk_live_[0-9a-zA-Z]{24}, sq0atp-[0-9A-Za-z\-_]{22}, sq0csp-[0-9A-Za-z\-_]{43}, [0-9]+:AA[0-9A-Za-z\-_]{33}, SK[0-9a-fA-F]{32}, [tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}, [tT][wW][iI][tT][tT][eE][rR].*['|"][0-9a-zA-Z]{35,44}['|"]]