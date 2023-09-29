app.put('/biscoitos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const novoPreco = req.body.preco; // Supondo que o novo preço seja fornecido no corpo da requisição
  
    const biscoitoIndex = biscoitos.findIndex((b) => b.id === id);
  
    if (biscoitoIndex === -1) {
      return res.status(404).json({ message: 'Biscoito não encontrado' });
    }
  
    // Atualize o preço do biscoito
    biscoitos[biscoitoIndex].preco = novoPreco;
  
    res.json({ message: 'Preço do biscoito atualizado com sucesso' });
  });
  