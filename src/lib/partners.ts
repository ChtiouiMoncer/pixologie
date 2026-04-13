/**
 * Partner logos for the trust carousel.
 * Files live in public/partners/ — use /partners/filename.ext (encode spaces as %20).
 */
export type Partner = {
  id: string;
  name: string;
  logoSrc?: string;
};

export const partners: Partner[] = [
  {
    id: "floral-fashion",
    name: "Floral Fashion",
    logoSrc: "/partners/floral.jpg",
  },
  {
    id: "6eme-vue",
    name: "6ème vue",
    logoSrc: "/partners/6emevue.png",
  },
  {
    id: "date-to-lives",
    name: "Date to Lives",
    logoSrc: "/partners/dateetolives.png",
  },
  {
    id: "hbf",
    name: "HBF",
    logoSrc: "/partners/hbf.png",
  },
  {
    id: "melki-confort",
    name: "Melki Confort",
    logoSrc: "/partners/melki%20confort.png",
  },
  {
    id: "totebag",
    name: "Totebag",
    logoSrc: "/partners/totebag.png",
  },
  {
    id: "fmf",
    name: "FMF",
    logoSrc: "/partners/fmf.png",
  },
  {
    id: "fortune",
    name: "Fortune",
    logoSrc: "/partners/fortune.png",
  },
  {
    id: "riva",
    name: "Riva",
    logoSrc: "/partners/riva.png",
  },
  {
    id: "sds",
    name: "SDS",
    logoSrc: "/partners/sds.png",
  },
];
