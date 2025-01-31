Vue.component("box", {
	props: ["img", "title", "offer", "oldPrice", "newPrice", "rating"],

	data() {
		return {}
	},

	template:
	`
		<div class="box-item">
		    <img :src="img" class="img">
		    <h4>
		        <a href="#">
					{{ title }}
		        </a>
		    </h4>
		    <div class="offer">
		        <span class="value">{{ offer }}%</span>
		        &nbsp;
		        <span class="price-old">{{ oldPrice }}</span>
		    </div>
		    <div class="new">
		        <div class="new-price">
		            <span class="new-value">{{ newPrice }} <span class="unit">تومان</span></span>
		        </div>
		        <div class="rating">
		            <span class="point">{{ rating }}</span>
		            &nbsp;
		            <svg class="product__rating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		                fill="currentColor">
		                <path fill-rule="evenodd"
		                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
		                    clip-rule="evenodd" />
		            </svg>
		        </div>
		    </div>
		</div>
	` 
});

new Vue({
	el: "#app",
});
