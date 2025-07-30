// Skills
Hooks.once("init", () => {
  CONFIG.DND5E.skills.streetwise = {
    label: "Streetwise",
    ability: "wis",
    fullKey: "streetwise", // Full key used in enrichers
    reference: "", // UUID of journal entry page for rich tooltips
    icon: "" // Icon used in favorites on new character sheet
  };
  
  CONFIG.DND5E.skills.engineering = {
    label: "Engineering",
    ability: "int",
    fullKey: "engineering", // Full key used in enrichers
    reference: "", // UUID of journal entry page for rich tooltips
    icon: "" // Icon used in favorites on new character sheet
  };

  CONFIG.DND5E.skills.tactics = {
    label: "Tactics",
    ability: "int",
    fullKey: "tactics", // Full key used in enrichers
    reference: "", // UUID of journal entry page for rich tooltips
    icon: "" // Icon used in favorites on new character sheet
  };

  CONFIG.DND5E.skills.resilience = {
    label: "Resilience",
    ability: "con",
    fullKey: "resilience", // Full key used in enrichers
    reference: "", // UUID of journal entry page for rich tooltips
    icon: "" // Icon used in favorites on new character sheet
  };  
});