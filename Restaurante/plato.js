//Clase Plato------------------------------------
class Plato {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarPlato() {
        return `nombre:${this.nombre} precio: ${this.precio}`;
    }
}

//Clase Menu--------------------------------------
class Menu {
    constructor() {
        this.platos = [];
    }

    agregarPlato(plato) {
        this.platos.push(plato);
    }

    mostrarMenu() {
        let resultados = [];

        for (let i = 0; i < this.platos.length; i++) {
            resultados.push(this.platos[i].mostrarPlato());
        }

        return resultados;
    }

    obtenerPlatoNombre(nombre) {
        return this.platos.find((plato) => plato.nombre === nombre);
    }
}


//Clase Pedido-----------------------------------
class Pedido {
    constructor() {
        this.platosPedidos = [];
    }

    agregarPlato(plato) {
        this.platosPedidos.push(plato);
    }

    calcularTotal() {
        let total = 0;

        for (let i = 0; i < this.platosPedidos.length; i++) {
            total += this.platosPedidos[i].precio;
        }

        return total;
    }

    mostrarPedido() {
        let resultadoPedidos = [];

        for (let i = 0; i < this.platosPedidos.length; i++) {
            resultadoPedidos.push(this.platosPedidos[i].mostrarPlato());
        }

        let pedidosTexto = resultadoPedidos.join(", ");

        let total = this.calcularTotal();

        return `${pedidosTexto} - Total: $${total}`;
    }

}

//Clase Restaurante----------------------------------------------------
class Restaurante {
    constructor() {
        this.menu = new Menu();
        this.pedidos = [];
    }

    crearPedido(mesa) {
        this.pedidos[mesa] = new Pedido(); // Pedidos[mesa] es igual a una nueva instancia del pedido es decir un nuevo pedido
        console.log(`pedido para la mesa ${mesa}`);
    }

    agregarPlatoAMesa(mesa, nombrePlato) {
        const plato = this.menu.obtenerPlatoNombre(nombrePlato);
        this.pedidos[mesa].agregarPlato(plato);
        console.log(`Plato "${nombrePlato}" añadido al pedido de la mesa ${mesa}`);
    }

    mostrarPedidoMesa(mesa) {
        console.log(`Pedido para la mesa ${mesa}:\n${this.pedidos[mesa].mostrarPedido()}`);
    }

    mostrarMenu() {
        console.log("Menu:\n" + this.menu.mostrarMenu());
    }
}


const restaurante = new Restaurante();


restaurante.menu.agregarPlato(new Plato('Pizza', 25000));
restaurante.menu.agregarPlato(new Plato('Hamburguesa', 18000));
restaurante.menu.agregarPlato(new Plato('Ensalada', 12000));

restaurante.mostrarMenu();

restaurante.crearPedido(1);

restaurante.agregarPlatoAMesa(1, 'Pizza');
restaurante.agregarPlatoAMesa(1, 'Ensalada');

restaurante.mostrarPedidoMesa(1);

restaurante.crearPedido(2);
restaurante.agregarPlatoAMesa(2, 'Hamburguesa');
restaurante.mostrarPedidoMesa(2);
