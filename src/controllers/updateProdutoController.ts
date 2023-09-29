import { Request, Response } from 'express';

interface Biscoito {
  id: number;
  nome: string;
  preco: number;
}

const biscoitos: Biscoito[] = [
  { id: 1, nome: 'Biscoito de Chocolate', preco: 2.99 },
  { id: 2, nome: 'Biscoito de Baunilha', preco: 2.49 },
];

export const atualizarBiscoito = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const novoPreco = req.body.preco; 

  const biscoitoIndex = biscoitos.findIndex((b) => b.id === id);

  if (biscoitoIndex === -1) {
    return res.status(404).json({ message: 'Biscoito não encontrado' });
  }

  biscoitos[biscoitoIndex].preco = novoPreco;

  res.json({ message: 'Preço do biscoito atualizado com sucesso' });
};app.put('/biscoitos/:id', (req: { params: { id: string; }; body: { preco: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; json: (arg0: { message: string; }) => void; }) => {
    const id = parseInt(req.params.id);
    const novoPreco = req.body.preco;

    const biscoitoIndex = biscoitos.findIndex((b) => b.id === id);

    if (biscoitoIndex === -1) {
        return res.status(404).json({ message: 'Biscoito não encontrado' });
    }

    biscoitos[biscoitoIndex].preco = novoPreco;

    res.json({ message: 'Preço do biscoito atualizado com sucesso' });
});

