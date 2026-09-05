'use server'

import { createServiceClient } from '@/lib/supabase/service'
import type { Product } from '@/types/database'

export type ShopProductResult =
  | { success: true;  data: Product[] }
  | { success: false; error: string }

/**
 * Fetch all active products for the public shop page.
 * Uses the service-role client so the query succeeds regardless of the
 * anon RLS policy — the results are already filtered to active=true.
 * Returns an empty array gracefully when Supabase is not configured.
 */
export async function getActiveProducts(): Promise<ShopProductResult> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return { success: false, error: 'Database not configured.' }
  }

  try {
    const supabase = createServiceClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('[getActiveProducts]', error.message)
      return { success: false, error: 'Failed to load products.' }
    }

    return { success: true, data: (data ?? []) as Product[] }
  } catch (err) {
    console.error('[getActiveProducts] unexpected:', err)
    return { success: false, error: 'An unexpected error occurred.' }
  }
}
