class Translacao extends Transformer {
    criadorDeInbetween() {
        var intervalo = this.fim - this.inicio;
        var m = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        var k = 0;
        var matrizes = new Matrizes()
        var identidade = matrizes.identidade(this.matrizDeTransformacao);

        for (var i = 0; i < 4; i++) {
            m[3][i] = this.matrizDeTransformacao[3][i]/intervalo

        }
        var matrizAux = this.matrizDeTransformacao;
        for (var j = this.fim; j > this.inicio; j--) {
            this.transformacoesIntermediarias[j] = matrizAux
            matrizAux = matrizes.subtracao(matrizAux, m);
        }
        return this.transformacoesIntermediarias;
    }

} 