function chant() {
      const chant = document.getElementById('chantText');
      chant.classList.remove('show');
      setTimeout(() => {
        chant.classList.add('show');
      }, 100);
    }