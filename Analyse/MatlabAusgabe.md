# Statistische Auswertung (MATLAB Output)

Die folgende Ausgabe wurde durch das Skript `wilcoxonAuswertung.m` generiert. Sie zeigt die Ergebnisse des Wilcoxon-Vorzeichen-Rang-Tests sowie die Berechnung der Effektstärke $r$.

```text
>> wilcoxonAuswertung
--------------------------------------------------
ANALYSE: ChatGPT - Barrieren (WCAG)
--------------------------------------------------
Wilcoxon Test:
  p-Wert:       0.8750
  Z-Wert:       0.1573
  Effekt (r):   0.0497
  -> Ergebnis ist NICHT signifikant
 
Deskriptive Statistik:
  Median:       Standard = 0.0  |  A11y = 0.0
  Mittelwert:   Standard = 0.60  |  A11y = 0.80


--------------------------------------------------
ANALYSE: ChatGPT - Best Practice
--------------------------------------------------
Wilcoxon Test:
  p-Wert:       0.7188
  Z-Wert:       0.3601
  Effekt (r):   0.1139
  -> Ergebnis ist NICHT signifikant
 
Deskriptive Statistik:
  Median:       Standard = 0.0  |  A11y = 0.0
  Mittelwert:   Standard = 1.20  |  A11y = 0.70


--------------------------------------------------
ANALYSE: Gemini - Barrieren (WCAG)
--------------------------------------------------
Wilcoxon Test:
  p-Wert:       0.7500
  Z-Wert:       0.3186
  Effekt (r):   0.1008
  -> Ergebnis ist NICHT signifikant
 
Deskriptive Statistik:
  Median:       Standard = 0.5  |  A11y = 0.0
  Mittelwert:   Standard = 0.90  |  A11y = 0.60


--------------------------------------------------
ANALYSE: Gemini - Best Practice
--------------------------------------------------
Wilcoxon Test:
  p-Wert:       0.0469
  Z-Wert:       1.9874
  Effekt (r):   0.6285
  -> Ergebnis ist SIGNIFIKANT
 
Deskriptive Statistik:
  Median:       Standard = 3.0  |  A11y = 0.0
  Mittelwert:   Standard = 2.90  |  A11y = 0.60