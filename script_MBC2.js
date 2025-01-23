
    // Checkbox ID-k listája
    const checkboxIds = ['AE HE-426', 'AE HE-427', 'AE LD-553', 'AE LD-554', 'AE LD-555', 'AE LD-556', 'AE LD-557', 'AE LD-558', 'AE LD-559'];

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