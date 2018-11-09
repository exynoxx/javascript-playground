
{
    var unroll = options.util.makeUnroll(location, options)
    var ast    = options.util.makeAST   (location, options)
}

ws "whitespaces"
    = [ \t\r\n]+
_ = ws*

word = [a-zA-Z]+
num = [0-9]+

start = exp
exp = vardecl / op
op = simple / binop
vardecl = "var"_ word _"="_ simple
simple = word / num / word _"["_ op _"]"
binop=simple (_[+-~]_ term)*
term =simple (_[*/%]_ factor)*
factor = simple / "("_ binop _")"