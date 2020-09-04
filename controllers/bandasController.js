let listadoBandas = require("../modules/bandas");
let bandasController = {
    index: function(req, res){
        return res.render("listado", {
            listaBandas: listadoBandas.lista
        })
    },
    id: function(req, res){
        let bandaId = req.params.id;
        let detalles = listadoBandas.llamarId(bandaId)
        return res.render("detalles", {
            detalles: detalles,
        })
    },
    genero: function(req, res){
        let bandaGenero = req.params.genero;
        let listadoGenero = listadoBandas.llamarGenero(bandaGenero)
        return res.render("genero", {
            generos: listadoGenero,
        })
    },
}

module.exports = bandasController;