# node-wildcard-domain-matcher

This module is only for wildcard domain matching and may not work fine with invalid domain name characters or other usage for efficient reason.

## class Matcher(opt)

* test([string]domain,[string]pattern,[bool]leadingWildCardSubdomainOnly=false)
* match([string]domain[array],patterns,[bool]leadingWildCardSubdomainOnly=false)

See the examples for usage

## examples

```javascript
var Matcher=require("wildcard-domain-matcher");

var matcher=new Matcher();
//patterns are cached as regexp in the object,if you don't want that use
var matcher=new Matcher({noCache:true);

matcher.test("luojia.me","*.luojia.me");
//true

//leading *. will only match subdomains if leadingWildCardSubdomainOnly=true
matcher.test("luojia.me","*.luojia.me",true);
//false

//return the first pattern matched in the list
matcher.match("luojia.me",["*.luojia.me","luojia.me","*"],true);
//"luojia.me"

```