// controllers/salesController.js

class salesController {
    constructor(salesService) {
        this.salesService = salesService;
    }

    async create(req, res) {
        const {nameProduct, amount, clientCPF} = req.body;

        try {
            const newSale = await this.salesService.create(nameProduct, amount, clientCPF);
            res.status(200).json(newSale);

        } catch (error) {
            res.status(500).json({error:'erro ao criar nova venda'});
        }
    }

}

module.exports = salesController;