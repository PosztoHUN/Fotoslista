
    // Checkbox ID-k listája
    const checkboxIds = ['checkbox1', 'checkbox2', 'checkbox3'];

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