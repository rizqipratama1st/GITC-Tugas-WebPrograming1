<html>

<head>
    <title>Tutorial Membuat Script PHP Menghitung Luas Persegi Panjang</title>
</head>

<body>
    <h2>Form Hitung Luas Persegi Panjang Dengan PHP</h2>
    <h3>Isi Data:</h3>
    <form action="./" method="POST" enctype="multipart/form-data">


        <tr>
            <td>Panjang / Alas</td>
            <td>:</td>
            <td><input type="text" name="panjang" required></td>
        </tr>
        <br>
        <tr>
            <td>Lebar / Tinggi</td>
            <td>:</td>
            <td><input type="text" name="lebar" required></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <br>
        <input type="radio" name="rumus" value="rumus_segitiga">
        <label for="rumus_segitiga">segitiga</label><br>
        <input type="radio" name="rumus" value="rumus_persegipanjang">
        <label for="rumus_segitiga">Persegi Panjang</label><br>
        <td><input type="submit" name="submit" value="Hitung"></td>
    </form>
    
    <?php if(isset($_POST['submit'])){
    $panjang    =$_POST['panjang'];
    $lebar      =$_POST['lebar'];
    $rumus      =$_POST['rumus'];




?>

</body>

</html>