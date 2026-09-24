import { Children, cloneElement, isValidElement } from "react";

/* Spezza il testo di un titolo in parole (<span class="w">) numerate con
   --i, attraversando anche gli span di accento: il CSS le fa entrare in
   sequenza. Funziona lato server; gli spazi restano nodi di testo, quindi
   l'andata a capo e la lettura restano quelle del testo originale. */
export function splitWords(children, counter = { i: 0 }) {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((part, k) =>
        part === "" || /^\s+$/.test(part) ? (
          part
        ) : (
          <span className="w" style={{ "--i": counter.i++ }} key={k}>
            {part}
          </span>
        )
      );
    }
    if (isValidElement(child) && child.props.children != null) {
      return cloneElement(child, undefined, splitWords(child.props.children, counter));
    }
    return child;
  });
}
