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
      <h1 class="u-no-margin--bottom">LATIHAN</h1>
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
          PHP : Tipe Data, Variabel, Konstanta
        </h1>


        
        ------------------------------------
        <h3>
        Percabangan if else
        </h3>
        <div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <?php $nilai = 40; if ($nilai >= 60) { echo "Nilai Anda : $nilai. Selamat, Anda Telah Lulus!!"; } else 
{ echo"Nilai Anda : $nilai Sorry, Anda Tidak Lulus!!" ; } ?>

            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
            <#?php $nilai = 40; if ($nilai >= 60) { echo "Nilai Anda : $nilai. Selamat, Anda Telah Lulus!!"; } else 
{ 
echo "Nilai Anda : $nilai_ Sorry, Anda Tidak Lulus!!"; 
} ?>
                  </textarea>
          </div>
        </div>


        ------------------------------------
        <h3>
        Percabangan switch case
        </h3>
        <div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <?php $angka = 6; 
switch ($angka){ case 0: $terbilang = "NOL"; 
break; 
case 1: $terbilang = "SATU";
break; 
case 2: $terbilang = "DUA"; 
break; 
case 3: $terbilang = "TIGA"; 
break; 
case 4: $terbilang = "EMPAT"; 
break; 
case 5: $terbilang = "LIMA"; 
break; 
case 6: $terbilang = "ENAM"; 
break; 
case 7: $terbilang = "TUJUH"; 
break;
case 8: $terbilang = "DELAPAN";
break; 
case 9: $terbilang = "SEMBILAN";
break; 
default: $terbilang = "Mai diluar jangkuann"; } 
echo "Bentuk terbilang dari angka $angka adalah $terbilang"; ?> 
            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
            <#?php $angka = 6; 
switch ($angka){ case 0: $terbilang = "NOL"; 
break; 
case 1: $terbilang = "SATU";
break; 
case 2: $terbilang = "DUA"; 
break; 
case 3: $terbilang = "TIGA"; 
break; 
case 4: $terbilang = "EMPAT"; 
break; 
case 5: $terbilang = "LIMA"; 
break; 
case 6: $terbilang = "ENAM"; 
break; 
case 7: $terbilang = "TUJUH"; 
break;
case 8: $terbilang = "DELAPAN";
break; 
case 9: $terbilang = "SEMBILAN";
break; 
default: $terbilang = "Mai diluar jangkuann"; } 
echo "Bentuk terbilang dari angka $angka adalah $terbilang"; ?> 
                  </textarea>
          </div>
        </div>



<h3>
Percabangan if majemuk
        </h3>
        <div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            
<?php
$nilai = 90;
if (($nilai >=0)&& ($nilai <50))
 {$grade= "E";}
 elseif (($nilai>=50) && ($nilai <60))
 {$grade= "D";}
 elseif (($nilai>=60) && ($nilai <75))
 {$grade= "C";}
 elseif (($nilai>=75) && ($nilai <85))
 {$grade= "B";}
 elseif (($nilai>=85) && ($nilai <100))
 {$grade= "A";}
 else
 {$grade= "Nilai diluar jangkauan";}
 echo "Nilai Anda : $nilai, gikonversi menjadi $grade";
 ?> 
            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
            <#?php
$nilai = 90;
if (($nilai >=0)&& ($nilai <50))
 {$grade= "E";}
 elseif (($nilai>=50) && ($nilai <60))
 {$grade= "D";}
 elseif (($nilai>=60) && ($nilai <75))
 {$grade= "C";}
 elseif (($nilai>=75) && ($nilai <85))
 {$grade= "B";}
 elseif (($nilai>=85) && ($nilai <100))
 {$grade= "A";}
 else
 {$grade= "Nilai diluar jangkauan";}
 echo "Nilai Anda : $nilai, gikonversi menjadi $grade";
 ?> 
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