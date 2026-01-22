class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("Garen", 32, "guerreiro");
const heroi2 = new Heroi("Lux", 20, "mago");
const heroi3 = new Heroi("Lee Sin", 40, "monge");
const heroi4 = new Heroi("Shen", 35, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
