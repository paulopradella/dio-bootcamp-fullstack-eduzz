//Programa para calcular a m�dia e um aluno em portugol

programa {
	funcao inicio() {
	    
		real nota1, nota2, nota3, nota4, media
		cadeia aluno
		
		escreva("Digite o nome do aluno:\n")
		leia(aluno)
		escreva("O nome do aluno �: " + aluno +"\n")
		
		escreva("Digite a primeira nota:\n")
		leia(nota1)
		escreva("Digite a primeira nota:\n")
		leia(nota2)
		escreva("Digite a primeira nota:\n")
		leia(nota3)
		escreva("Digite a primeira nota:\n")
		leia(nota4)
		
		media = (nota1 + nota2 + nota3 + nota4)/4
		
		se(media >= 7){
		    escreva("\nSua m�dia foi: " + media + "\nParab�ns voc� foi aprovado")
		}
		senao{
		    escreva("\nSua m�dia foi: " + media + "\nVoc� foi reprovado")
		}
	}
}
