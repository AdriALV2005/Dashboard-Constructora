import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from 'next/image'
import Search from "@/app/ui/dashboard/search/search"
import Link from 'next/link'
import Pagination from "@/app/ui/dashboard/pagination/pagination"

function Products() {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a user" />
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.product}>
              <Image
                src="/noproduct.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.productImage}
              />
              CANSERBERO
            </div>
          </td>
          <td>Un gatito muy amable</td>
          <td>$0.00</td>
          <td>13.03.2003</td>
          <td>23</td>
          <td>
            <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default Products