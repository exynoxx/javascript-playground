
{
    var unroll = options.util.makeUnroll(location, options)
    var ast    = options.util.makeAST   (location, options)
}

start
    = _ seq:id_seq _ {
          return ast("Sample").add(seq)
      }

id_seq
    = id:id ids:(_ "," _ id)* {
          return ast("IdentifierSequence").add(unroll(id, ids, 3))
      }

id
    = id:$([a-zA-Z_][a-zA-Z0-9_]*) {
          return ast("Identifier").set("name", id)
      }

_ "blank"
    = (co / ws)*

co "comment"
    = "//" (![\r\n] .)*
    / "/*" (!"*/" .)* "*/"




ws "whitespaces"
    = [ \t\r\n]+
_ = ws*

word = [a-zA-Z]+
num = [0-9]+

start = exp
exp = vardecl / op
op = simple / binop
vardecl = "var"_word_\=_simple
simple = word / num / word_\[op\]
binop=simple (_[+-~]_term)*
term =(factor_[*/%]_factor)*
factor = simple / "("_binop_")"