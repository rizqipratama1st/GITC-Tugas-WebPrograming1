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
      <h1 class="u-no-margin--bottom"> Tugas Pertemuan 2</h1>
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
          TUGAS 2 <br> PHP : Tipe Data, Variabel, Konstanta
        </h1>
        <h3>
          berikut adalah contoh php yang telah kami kerjakan :
        </h3>
        <div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>
              <?php
                  $nim="13170528";
                  $nama="Rizqi Pratama";
                  $kelas="12.6AB.05";
                  echo "Nim saya = $nim<br>";
                  echo "Nama saya = $nama<br>";
                  echo "Kelas saya = $kelas<br>";
                ?>
            </p>
          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>
            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="8">
                <#?php $nim="13170528" ; $nama="Rizqi Pratama" ; $kelas="12.6AB.05" ; echo "Nim saya = $nim <br>" ;
                  echo "Nama saya = $nama <br>" ; echo "Kelas saya = $kelas <br>" ; ?>
                  </textarea>
          </div>
        </div>


        <h3>Codingan Variabel dan Konstanta :</h3>


        <div class="p-card">
          <div class="col-6 p-divider__block">
            <h3>Output : </h3>

            <p>Hitung Luas Lingkaran<br>
              <form action="./" method="POST" enctype="multipart/form-data">
                Masukan Jari-jari Lingkaran
                <td><input type="text" name="jari" required></td>
                <td><input type="submit" name="submit" value="Hitung">
              </form>
              <?php
        if(isset($_POST['submit'])){
            $jari   =$_POST['jari'];
            $phie    =22/7;

            // menghitung luas lingkaran
            $luas_lingkaran = $phie*($jari*$jari);

            echo "Hasil hitung luas lingkaran adalah sebagai berikut:<br />";
            echo "Diketahui;<br />";
            echo "Jari-jari lingkaran = $jari<br />";
            echo "Phie = $phie<br />";
            echo "Maka luas lingkaran sama dengan [ $phie x $jari x $jari ] = $luas_lingkaran"; } ?>

          </div>
          <div class="col-6 p-divider__block">
            <h3>Source Code :</h3>

            <p> hapus tanda # pada awal baris <#?php</p> <textarea rows="21" class="nothing">
                <html>
                <header>
                  <title>Hitung Luas Lingkaran</title>
                </header>

                <body>
                  <p>Hitung Luas Lingkaran<br>
                    <form action="./" method="POST" enctype="multipart/form-data">
                      Masukan Jari-jari Lingkaran
                      <td><input type="text" name="jari" required></td>
                      <td><input type="submit" name="submit" value="Hitung">
                    </form>
                    <#?php if(isset($_POST['submit'])){ $jari=$_POST['jari']; $phie=22/7; // menghitung luas lingkaran
                      $luas_lingkaran=$phie*($jari*$jari);
                      echo "Hasil hitung luas lingkaran adalah sebagai berikut:<br />" ; echo "Diketahui;<br />" ;
                      echo "Jari-jari lingkaran = $jari<br />" ; echo "Phie = $phie<br />" ;
                      echo "Maka luas lingkaran sama dengan [ $phie x $jari x $jari ] = $luas_lingkaran" ; } ?>
                </body>

                </html>
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