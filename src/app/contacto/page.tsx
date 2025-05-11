import Link from "next/link";
export default function Contacto() {
  return (
    <main>
		<form>
			<h1>Iniciar Sesión</h1>
			<div>
				<label htmlFor="usuario">Usuario</label>
				<input type="text" id="usuario" name="usuario" placeholder="Ingresa tu usuario" required/>
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required/>
			</div>
			<div>
				<label htmlFor="email">Correo electrónico</label>
				<input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required/>
			</div>
			
			<div className="form-links">
				<button type="submit">Iniciar Sesión</button>
				<button type="button"><Link href="/">Volver al inicio</Link></button>
			</div>
		</form>
	</main>
  );
}
