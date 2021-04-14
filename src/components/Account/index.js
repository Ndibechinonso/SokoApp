import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Order from '../Order'
import './Account.css'

const Account = (props) => {
    return (
        <div>
            <Topbar />
            <Navbar className='accountHeaderDiv' subClass='accountHeader' text='+234 7030219551' isButton />

            <div className='accountFirstRow'>
                <div className='accountFirstCol'><div><i class="fas fa-money-check accountMenu"></i> My order</div><div><i class="fas fa-map-marker-alt accountMenu"></i> My addresses</div></div> <div className='accountContainer'><div className='accountGridRow'><div className='showOrder'>Showing all orders</div><div className='filterDiv'><i class="fas fa-filter"></i> Filter</div>  </div>
                    <div className='orderRow'>
                        <Order icon='fas fa-bullseye red' seller='Target' orderNo='#1233341' itemQuantity='3' price='UGX 12.700' statusIcon='fas fa-circle' status='Shipped' statusIndicator='orange' />
                        <Order icon='fas fa-warehouse plain' seller="Ahbi's Juke Store" orderNo='#1213396' itemQuantity='1' price='UGX 5,400' statusIcon='fas fa-circle' status='Delivered' statusIndicator='blue' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account