% ==========================================
% DATEN DEFINITION
% ==========================================

% 1. ChatGPT Barrieren (WCAG)
chatgpt_wcag_std  = [0 0 0 0 0 0 2 0 4 0];
chatgpt_wcag_ally = [0 3 0 0 0 1 0 0 0 4];

% 2. ChatGPT Best Practice
chatgpt_bp_std    = [4 0 0 0 2 0 1 5 0 0];
chatgpt_bp_ally   = [0 0 2 0 3 0 0 1 0 1];

% 3. Gemini Barrieren (WCAG)
gemini_wcag_std   = [1 0 1 1 4 2 0 0 0 0];
gemini_wcag_ally  = [0 0 1 0 0 0 0 2 3 0];

% 4. Gemini Best Practice
gemini_bp_std     = [0 0 6 3 3 4 3 3 7 0];
gemini_bp_ally    = [0 0 0 2 0 0 4 0 0 0];

% ==========================================
% ANALYSE AUSFÜHREN (Funktionsaufrufe)
% ==========================================

analyze_metric("ChatGPT - Barrieren (WCAG)", chatgpt_wcag_std, chatgpt_wcag_ally);
analyze_metric("ChatGPT - Best Practice", chatgpt_bp_std, chatgpt_bp_ally);

analyze_metric("Gemini - Barrieren (WCAG)", gemini_wcag_std, gemini_wcag_ally);
analyze_metric("Gemini - Best Practice", gemini_bp_std, gemini_bp_ally);


% ==========================================
% FUNKTIONS DEFINITION
% ==========================================

function analyze_metric(name, data_std, data_ally)
    % Trennlinie für bessere Lesbarkeit
    fprintf('--------------------------------------------------\n');
    fprintf('ANALYSE: %s\n', name);
    fprintf('--------------------------------------------------\n');

    % 1. Wilcoxon-Vorzeichen-Rang-Test
    [p, h, stats] = signrank(data_std, data_ally);
    
    % 2. Z-Wert und Effektstärke r manuell berechnen
    % (Da bei N<15 oft kein stats.zval ausgegeben wird)
    n = length(data_std);
    
    % Z aus p-Wert ableiten (Inverse Normalverteilung)
    % Falls p=1 ist Z=0.
    if p >= 1.0
        z_val = 0;
    else
        z_val = norminv(1 - p/2);
    end
    
    % Effektstärke r = Z / wurzel(N)
    r_val = z_val / sqrt(n);

    % 3. Deskriptive Statistik
    med_std = median(data_std);
    med_ally = median(data_ally);
    mean_std = mean(data_std);
    mean_ally = mean(data_ally);

    % 4. Ausgabe der Ergebnisse
    disp("Wilcoxon Test:");
    fprintf('  p-Wert:       %.4f\n', p);
    fprintf('  Z-Wert:       %.4f\n', z_val);
    fprintf('  Effekt (r):   %.4f\n', r_val);
    
    % Signifikanz-Hinweis
    if p < 0.05
        fprintf('  -> Ergebnis ist SIGNIFIKANT\n');
    else
        fprintf('  -> Ergebnis ist NICHT signifikant\n');
    end
    
    disp(" ");
    disp("Deskriptive Statistik:");
    fprintf('  Median:       Standard = %.1f  |  A11y = %.1f\n', med_std, med_ally);
    fprintf('  Mittelwert:   Standard = %.2f  |  A11y = %.2f\n', mean_std, mean_ally);
    fprintf('\n\n'); % Leerzeilen am Ende
end