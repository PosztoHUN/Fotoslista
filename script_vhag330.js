
    // Checkbox ID-k listája
    const checkboxIds = ['MUT882', 'MUT883', 'MUT883', 'MUT884', 'MUT885', 'MUT886', 'MUT887', 'MUT888', 'MUT889', 'MUT890', 'MUT891', 'MUT893', 'MUT894', 'MUT895'];

    // Betöltéskor állapotok visszaállítása
    window.onload = () => {
      const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
      checkboxIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (savedStates[id] === true) {
          checkbox.checked = true;
        }
      });
    };

    // Minden checkboxhoz eseményfigyelő
    checkboxIds.forEach(id => {
      const checkbox = document.getElementById(id);
      checkbox.addEventListener('change', () => {
        // Állapotok lekérdezése és mentése
        const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
        savedStates[id] = checkbox.checked; // Mentjük az adott checkbox állapotát
        localStorage.setItem('checkboxStates', JSON.stringify(savedStates));
      });
    });