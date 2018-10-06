Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* { return head+tail; }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* { return head+tail; }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / expr:Integer { return expr; }

Integer "integer"
  = m:(_[0-9]+) {return m;}

_ "whitespace"
  = [ \t\n\r]*