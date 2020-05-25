import type { CSSProperties } from "react";

export function createStyleFor<Target extends string>(styleMap: Record<Target, CSSProperties>): typeof styleMap {
	return styleMap; // useless for js, priceless for ts
}
