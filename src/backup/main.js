var fs      = require("fs")
var ASTY    = require("asty")
var PEG     = require("pegjs")
var PEGUtil = require("pegjs-util")

var asty = new ASTY()
var parser = PEG.generate(fs.readFileSync("syntax.pegjs", "utf8"))
var result = PEGUtil.parse(parser, "hello,hey", {
    startRule: "start",
    makeAST: function (line, column, offset, args) {
        return asty.create.apply(asty, args).pos(line, column, offset)
    }
})
if (result.error !== null)
    console.log("ERROR: Parsing Failure:\n" +
        PEGUtil.errorMessage(result.error, true).replace(/^/mg, "ERROR: "))
else
    console.log(result.ast.dump().replace(/\n$/, ""))
