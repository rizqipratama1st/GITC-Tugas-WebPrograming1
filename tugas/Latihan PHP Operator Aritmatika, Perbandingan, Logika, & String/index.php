<!doctype html>
<html lang="id">

<style type="text/css" media="screen">
  .p-strip--image {
    background-image: url('../asset/775cc62b-vanilla-grad-background.png');
    background-position: 75% 25%;
  }
</style>
<link href='../asset/vanilla-framework-version-1.8.0.min.css' rel='stylesheet' type='text/css'>
<link href='../asset/fonts.css' rel='stylesheet' type='text/css'>

<head>
  <title>Portal Hasil Belajar WP </title>
  <meta charset="UTF-8" />
  <meta name="description" content="CD images for Ubuntu 20.04 LTS (Focal Fossa) Beta" />
  <meta name="author" content="Canonical" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>


<body>
  <header id="navigation" class="header-nuri">
    <div class="row">
      <div class="p-navigation__banner">
        <div class="p-navigation__logo">
          <a class="p-navigation__link" href="/">
            <img class="logo-nuri" src="../asset/nurilogo.png" alt="logo nusamandiri">
          </a>
        </div>
      </div>
      <nav class="p-navigation__nav" role="menubar">
      </nav>
    </div>
  </header>
  <section class="p-strip--image is-dark">
    <div class="row">
      <h1 class="u-no-margin--bottom"> LATIHAN</h1>
    </div>
  </section>
  <div id="pageWrapper" class="p-strip">
    <div class="row">
      <div id="main">

        <form action="../">
          <input type="submit" value="<<< KEMBALI" />
        </form>
        <br>
        <h1>
          PHP : Operator Aritmatika, Perbandingan, Logika, & String
        </h1>

        <h3>
Operator Aritmatika
</h3>
<div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>
            <?php 
$bil1=200;
$bil2=40;
$hasil=$bil1+$bil2;
echo"$bil1 + $bil2 = $hasil <br>";
$hasil=$bil1-$bil2;
echo"$bil1 - $bil2 = $hasil <br>";
$hasil=$bil1/$bil2;
echo"$bil1 / $bil2 = $hasil <br>";
?>
            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
            <#?php 
$bil1=200;
$bil2=40;
$hasil=$bil1+$bil2;
echo"$bil1 + $bil2 = $hasil <br>";
$hasil=$bil1-$bil2;
echo"$bil1 - $bil2 = $hasil <br>";
$hasil=$bil1/$bil2;
echo"$bil1 / $bil2 = $hasil <br>";
?>
                  </textarea>
          </div>
        </div>
<br>
---------------------


<h3>
Operator Perbandingan
</h3>
<div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>
<?php 
$bil1=200;
$bil2=40;
$teks1="PHP";
$teks2="php";

$hasil = $bil1==$bil2;
echo"$bil1==$bil2 = $hasil<br>";

$hasil = $bil1!=$bil2;
echo"$bil1!=$bil2 = $hasil<br>";

$hasil = $bil1>=$bil2;
echo"$bil1>=$bil2 = $hasil<br>";

$hasil = $teks1==$teks2;
echo"$teks1==$teks2 = $hasil<br>";

$hasil = $teks1!=$teks2;
echo"$teks1!=$teks2 = $hasil<br>";

?>

            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
<#?php 
$bil1=200;
$bil2=40;
$teks1="PHP";
$teks2="php";

$hasil = $bil1==$bil2;
echo"$bil1==$bil2 = $hasil<br>";

$hasil = $bil1!=$bil2;
echo"$bil1!=$bil2 = $hasil<br>";

$hasil = $bil1>=$bil2;
echo"$bil1>=$bil2 = $hasil<br>";

$hasil = $teks1==$teks2;
echo"$teks1==$teks2 = $hasil<br>";

$hasil = $teks1!=$teks2;
echo"$teks1!=$teks2 = $hasil<br>";

?>



                  </textarea>
          </div>
        </div>

        ---------------------


<h3>
Operator Logika
</h3>
<div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>
<?php 
$bil1=200;
$bil2=40;
$teks1="PHP";
$teks2="php";
$hasil =($bil1<>$bil2) or ($teks1==$teks2) ;
echo"$bil1<>$bil2 or $teks1==$teks2 adalah hasil $hasil<br>";
$hasil=!($teks1==$teks2);
echo"!($teks1==$teks2 adalah $hasil";
?>

            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
<#?php 
$bil1=200;
$bil2=40;
$teks1="PHP";
$teks2="php";
$hasil =($bil1<>$bil2) or ($teks1==$teks2) ;
echo"$bil1<>$bil2 or $teks1==$teks2 adalah hasil $hasil<br>";
$hasil=!($teks1==$teks2);
echo"!($teks1==$teks2 adalah $hasil";
?>




                  </textarea>
          </div>
        </div>


        ---------------------


<h3>
Operator String
</h3>
<div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>
            <?php $teksl = "Aku sedang belajar ";
$teks2 = "Pemrograman WEB "; 
$teks3 = " Menggunakan Bahasa Pemrograman PHP"; 
$hasil = $teksl . $teks2 . $teks3; 
echo "$hasil"; ?> 

            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
<#?php $teksl = "Aku sedang belajar ";
$teks2 = "Pemrograman WEB "; 
$teks3 = " Menggunakan Bahasa Pemrograman PHP"; 
$hasil = $teksl . $teks2 . $teks3; 
echo "$hasil"; ?> 




                  </textarea>
          </div>
        </div>








      </div>
    </div>
  </div>
  <footer class="p-footer">
    <div class="row">
      <p><small>&copy; Fossnetzwerk Group. Situs ini menggunakan Vanilla Framework, Logo Ubuntu adalah hak mikik
          Canonical.</small></p>
    </div>
  </footer>
</body>

</html>