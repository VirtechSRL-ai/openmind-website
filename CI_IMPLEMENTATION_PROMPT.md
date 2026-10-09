Quello che ti serve è un **prompt universale da inserire in qualsiasi tuo progetto software**, indipendentemente dal linguaggio, dal framework o dall'ambiente di sviluppo.

L'obiettivo è chiedere al sistema di **analizzare il progetto esistente e implementare una pipeline CI/CD completa**, senza modificare inutilmente l'architettura applicativa.

Puoi copiare direttamente questo prompt.

---

# PROMPT — Implementazione CI/CD, Quality Gates e processo di rilascio

## OBIETTIVO

Voglio introdurre in questo progetto un processo professionale e automatizzato di sviluppo, verifica e rilascio del software.

Il processo deve seguire questa struttura:

```text
COMMIT / PUSH
     ↓
BUILD
     ↓
UNIT TESTS
     ↓
STATIC ANALYSIS
     ↓
SECURITY CHECKS
     ↓
INTEGRATION TESTS
     ↓
ARTIFACT
     ↓
STAGING
     ↓
END-TO-END TESTS
     ↓
APPROVAL
     ↓
PRODUCTION
     ↓
HEALTH CHECKS
     ↓
MONITORING
```

**Non voglio una semplice documentazione teorica. Voglio che queste funzionalità vengano effettivamente integrate nel repository, per quanto consentito dall'infrastruttura disponibile.**

Il sistema deve adattarsi automaticamente alle tecnologie già utilizzate nel progetto.

Non introdurre strumenti, servizi o dipendenze inutili.

## FASE 1 — Analisi iniziale

Prima di apportare modifiche, analizza il repository e identifica:

1. Linguaggi di programmazione utilizzati.
2. Framework frontend e backend.
3. Struttura e architettura del progetto.
4. Package manager e strumenti di build.
5. Test automatici già presenti.
6. Database e migrazioni.
7. Sistema di versionamento.
8. Eventuali workflow CI/CD esistenti.
9. Modalità attuale di deployment.
10. Ambienti disponibili: development, staging, production.
11. Strumenti già presenti per sicurezza e monitoraggio.

Non sostituire componenti già funzionanti senza una motivazione tecnica.

Riutilizza preferibilmente gli strumenti presenti.

## FASE 2 — Build automatizzata

Implementa un processo di build riproducibile.

La build deve:

- Verificare che il codice sia compilabile.
- Controllare le dipendenze necessarie.
- Rilevare errori di compilazione e configurazione.
- Restituire un codice di uscita non nullo in caso di errore.
- Interrompere la pipeline in presenza di errori bloccanti.

La build deve essere eseguibile sia localmente sia nella pipeline CI.

## FASE 3 — Unit testing

Verifica la presenza di test unitari.

Se mancano, configura il framework appropriato per il linguaggio utilizzato.

Implementa test per le componenti critiche:

- Logica di business.
- Validazione degli input.
- Gestione degli errori.
- Autorizzazioni.
- Trasformazione dei dati.
- Funzioni e servizi principali.

I test devono essere indipendenti e riproducibili.

Una regressione deve comportare il fallimento del controllo automatico.

Non utilizzare test fittizi creati soltanto per ottenere un risultato positivo.

## FASE 4 — Static analysis

Integra strumenti di analisi statica compatibili con il progetto.

I controlli devono individuare:

- Errori di tipizzazione.
- Problemi di qualità del codice.
- Codice inutilizzato.
- Possibili bug.
- Violazioni delle convenzioni.
- Problemi di manutenibilità.
- Pattern potenzialmente pericolosi.

Configura linting e formattazione coerenti con lo stack.

Distingui gli errori bloccanti dagli avvisi informativi.

## FASE 5 — Security checks

Integra controlli automatici di sicurezza.

Devono comprendere, dove applicabile:

**Dependency scanning**
- Identificazione di dipendenze con vulnerabilità note.
- Segnalazione della gravità.
- Blocco secondo soglie di rischio configurabili.

**Secret scanning**
- Ricerca di password.
- API key.
- Token di accesso.
- Credenziali accidentalmente presenti nel repository.

**Code security**
- Individuazione di pattern vulnerabili.
- Possibili injection.
- Utilizzo non sicuro degli input.
- Problemi comuni di autenticazione e autorizzazione.

Non stampare credenziali o informazioni sensibili nei log.

Non introdurre segreti nel repository.

## FASE 6 — Integration testing

Implementa test per verificare la comunicazione tra i componenti.

A seconda dell'architettura, controlla:

- Backend e database.
- API e servizi.
- Autenticazione e autorizzazione.
- Operazioni CRUD.
- Gestione delle transazioni.
- Migrazioni database.
- Eventuali servizi esterni.

Utilizza database e servizi di test isolati quando possibile.

Non eseguire test distruttivi su database di produzione.

I servizi esterni non disponibili durante i test devono essere simulati o gestiti con ambienti di test dedicati.

## FASE 7 — Artifact e versionamento

Configura la produzione di artifact distribuibili.

A seconda del progetto:

- Immagini Docker.
- Pacchetti applicativi.
- Build frontend.
- Binari o altri output distribuibili.

Ogni artifact deve essere collegato al commit Git che lo ha generato.

Utilizza versioni o identificatori immutabili.

Evita di utilizzare esclusivamente il tag `latest`.

L'artifact deve poter essere distribuito senza ricompilare il codice tra staging e produzione, quando tecnicamente possibile.

## FASE 8 — Ambiente staging

Analizza se esiste già un ambiente staging.

Se è disponibile, configura il deployment automatico delle versioni candidate.

Se non esiste:

- Predisponi la configurazione necessaria.
- Mantieni staging separato dalla produzione.
- Non creare risorse cloud a pagamento senza autorizzazione.
- Non utilizzare dati sensibili reali senza adeguate protezioni.

Le configurazioni dei due ambienti devono essere separate.

## FASE 9 — End-to-End testing

Configura test E2E per i principali flussi dell'applicazione.

Utilizza strumenti appropriati, come Playwright per le applicazioni web.

Identifica i percorsi critici:

- Login.
- Operazioni principali.
- Creazione e modifica di dati.
- Salvataggio.
- Navigazione.
- Gestione degli errori.
- Verifica delle autorizzazioni.

I test devono eseguire operazioni realistiche, utilizzando dati di prova.

Un fallimento critico deve impedire la promozione della release.

Se il progetto non dispone di un'interfaccia grafica, implementa test equivalenti sui flussi API o sui processi applicativi.

## FASE 10 — Approval e deployment

Configura un processo di rilascio controllato.

Regole:

1. Nessun deployment automatico in produzione da un semplice commit.
2. I controlli obbligatori devono essere superati.
3. La versione candidata deve essere identificabile.
4. Il rilascio deve richiedere un'approvazione esplicita.
5. Il deployment deve utilizzare l'artifact verificato.
6. Deve essere possibile identificare la versione precedentemente distribuita.

Se il repository utilizza GitHub, valuta GitHub Actions, branch protection ed environments.

Non modificare direttamente l'ambiente di produzione durante questa implementazione.

## FASE 11 — Health checks e monitoraggio

Dopo il deployment, il sistema deve poter verificare:

- Disponibilità dell'applicazione.
- Stato dei servizi essenziali.
- Errori applicativi.
- Fallimenti delle richieste.
- Tempi di risposta.
- Eventuali problemi di connessione al database.

Riutilizza eventuali strumenti di monitoraggio già presenti.

Prevedi una procedura di rollback documentata.

Non configurare rollback automatici distruttivi sui database.

## FASE 12 — Organizzazione della pipeline

Non eseguire necessariamente tutti i controlli a ogni commit.

Organizza il processo in questo modo:

| Evento | Controlli richiesti |
|---|---|
| Sviluppo locale | Lint, type check, test pertinenti |
| Commit | Controlli rapidi |
| Pull Request | Build, unit test, security, static analysis, integration test |
| Merge su main | Generazione artifact e deployment staging |
| Staging | Test E2E e verifiche funzionali |
| Approvazione | Autorizzazione alla pubblicazione |
| Production | Deployment, health checks e monitoraggio |

Esegui in parallelo i controlli indipendenti quando possibile.

Utilizza caching delle dipendenze per ridurre i tempi.

Evita pipeline inutilmente lente.

## FASE 13 — Report finale

Al termine dell'implementazione, produci un report contenente:

**1. Stato iniziale**
- Strumenti già presenti.
- Strumenti mancanti.
- Criticità individuate.

**2. Modifiche effettuate**
- File creati.
- File modificati.
- Dipendenze introdotte.
- Workflow configurati.

**3. Verifiche**
- Test eseguiti.
- Test superati.
- Test falliti.
- Controlli non verificabili.

**4. Stato di ogni fase**

Utilizza queste classificazioni:

- `IMPLEMENTED_AND_VERIFIED`
- `IMPLEMENTED_NOT_VERIFIED`
- `PARTIALLY_IMPLEMENTED`
- `BLOCKED`
- `NOT_APPLICABLE`

Non dichiarare completata una fase soltanto perché è stato creato il relativo file di configurazione.

**5. Interventi manuali necessari**

Indica eventuali configurazioni esterne mancanti:

- Secret del repository.
- Permessi GitHub.
- Branch protection.
- Credenziali di staging.
- Container Registry.
- Ambienti di deployment.
- Approvazioni.

## REGOLE FONDAMENTALI

- Non riscrivere l'architettura applicativa.
- Non introdurre servizi a pagamento senza autorizzazione.
- Non modificare dati di produzione.
- Non disabilitare controlli per ottenere un risultato positivo.
- Non simulare test riusciti.
- Non introdurre test privi di valore.
- Non pubblicare in produzione durante l'implementazione.
- Non compromettere i workflow di deployment già funzionanti.
- Mantieni la configurazione semplice e manutenibile.
- Prediligi strumenti open-source o già disponibili.
- Documenta ciò che è stato realmente verificato.

**Risultato atteso:** il repository deve disporre di un processo CI/CD funzionante, verificabile e proporzionato alla complessità dell'applicazione, con quality gate automatici e rilascio in produzione controllato.

---

### Come lo utilizzerei nei tuoi progetti

Questo prompt puoi darlo separatamente a OpenMind, Appuntamy, EmailFilterAI, Glam Pilates e agli altri programmi.

**Non lo farei eseguire contemporaneamente su tutti i repository.** Inizierei da un'applicazione, verificherei che il processo funzioni effettivamente e poi replicherei lo standard.

Un'ultima cosa importante: **CI/CD non significa automaticamente che il software sia privo di bug**. Per i tuoi programmi che utilizzano agenti AI, query SQL e automazioni, aggiungerei successivamente una seconda componente: un sistema di *regression testing funzionale*, che verifichi anche la correttezza delle risposte e delle operazioni eseguite, non soltanto il funzionamento tecnico del software.