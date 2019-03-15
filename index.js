class Matcher{
    constructor(opt={}){
        opt=Object.assign({},{noCache:false},opt);
        this.noCache=opt.noCache;
        this._cache={};
    }
    test(domain,pattern,leadingWildCardSubdomainOnly=false){//will return the first matched pattern
        if(!leadingWildCardSubdomainOnly&&pattern.startsWith("*.")){
            if(pattern.slice(2)===domain)return true;
        }
        let regexp=this._cache[pattern];
        if(!regexp){
            regexp=new RegExp(`^${pattern.replace(/\./g,"\\.").replace(/\*/g,".*?")}\$`);
            // console.log(regexp)
        }
        if(!this.noCache)
            this._cache[pattern]=regexp;
        return regexp.test(domain);
    }
    match(domain,patterns,leadingWildCardSubdomainOnly=false){
        for(let p of patterns){
            if(this.test(domain,p,leadingWildCardSubdomainOnly))
                return p;
        }
        return false;
    }
}

module.exports=Matcher;