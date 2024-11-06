#include <stdio.h>
#include <limits.h>

#define MAX_NODOS 100
#define DIST_MAXIMA 99999

// Função para encontrar o nodo com o valor mínimo de distância
int menorDistancia(int distancias[], int conjuntoSPT[], int totalNodos) {
    int min = DIST_MAXIMA, indiceMin;

    for (int i = 0; i < totalNodos; i++) {
        if (!conjuntoSPT[i] && distancias[i] < min) {
            min = distancias[i];
            indiceMin = i;
        }
    }

    return indiceMin;
}

// Função para imprimir o array de distâncias construído
void exibirSolucao(int distancias[], int totalNodos) {
    printf("\tDistância da origem\n");
    for (int i = 0; i < totalNodos; i++) {
        printf("%d \t%d\n", i, distancias[i]);
    }
}

// Função que implementa o algoritmo de Dijkstra para um grafo e um nodo origem
void dijkstra(int grafo[MAX_NODOS][MAX_NODOS], int origem, int totalNodos) {
    int distancias[MAX_NODOS]; // Array que mantém a menor distância da origem para cada nodo
    int conjuntoSPT[MAX_NODOS]; // conjuntoSPT[i] é verdadeiro se o nodo i está no conjunto de caminhos mínimos

    // Inicializa distâncias como infinito e conjuntoSPT como falso para todos os nodos
    for (int i = 0; i < totalNodos; i++) {
        distancias[i] = DIST_MAXIMA;
        conjuntoSPT[i] = 0;
    }

    // Distância da origem para ela mesma é zero
    distancias[origem] = 0;

    // Encontra o caminho mais curto para todos os nodos
    for (int count = 0; count < totalNodos - 1; count++) {
        // Seleciona o nodo de distância mínima do conjunto ainda não processado
        int nodoAtual = menorDistancia(distancias, conjuntoSPT, totalNodos);

        // Marca o nodo selecionado como processado
        conjuntoSPT[nodoAtual] = 1;

        // Atualiza o valor de distâncias para nodos adjacentes ao nodo selecionado
        for (int adj = 0; adj < totalNodos; adj++) {
            // Atualiza distancias[adj] se adj não está no conjuntoSPT, existe uma aresta de nodoAtual a adj,
            // e o peso total do caminho da origem até adj passando por nodoAtual for menor que distancias[adj]
            if (!conjuntoSPT[adj] && grafo[nodoAtual][adj] && distancias[nodoAtual] != DIST_MAXIMA &&
                distancias[nodoAtual] + grafo[nodoAtual][adj] < distancias[adj]) {
                distancias[adj] = distancias[nodoAtual] + grafo[nodoAtual][adj];
            }
        }
    }

    // Imprime o array de distâncias finais
    exibirSolucao(distancias, totalNodos);
}

int main() {
    int totalNodos = 5;

    int grafo[MAX_NODOS][MAX_NODOS];

    // Inicializando a matriz de adjacência do grafo
    for (int i = 0; i < totalNodos; i++) {
        for (int j = 0; j < totalNodos; j++) {
            grafo[i][j] = (i == j) ? 0 : DIST_MAXIMA;
        }
    }

    grafo[0][1] = 12;
    grafo[0][3] = 87;
    grafo[1][4] = 11;
    grafo[2][0] = 19;
    grafo[3][1] = 23;
    grafo[4][2] = 10;
    grafo[4][3] = 43;

    int origem;
    printf("Insira a origem da busca: ");
    scanf("%d", &origem);

    dijkstra(grafo, origem, totalNodos);

    return 0;
}
