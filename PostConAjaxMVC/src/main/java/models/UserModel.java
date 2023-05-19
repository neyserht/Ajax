

package models;

public class UserModel 
{
    public String procesarDatos(String c1, String c2, String c3)
    {
        c1 = "Nombre del usuario: " + c1 + "<br>";
        c2 = "Puesto del usuario: " + c2 + "<br>";
        c3 = "Salario del usuario: " + c3 + "<br>";
        c1+= c2 + c3;
        return c1;
    }
}
